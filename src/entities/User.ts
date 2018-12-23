import bcrypt from "bcrypt-nodejs";
import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", unique: true, nullable: true })
  uniqueKey: string;

  @Column({ type: "text", unique: true, nullable: true })
  userId: string;

  @Column({ type: "text", nullable: true })
  password: string;

  @Column({ type: "text", nullable: true })
  inputPassword: string | null;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  public comparePassword(password: string): Promise<boolean> {
    const hashedPassword = this.password;
    return new Promise((resolve, reject) => {
      const result = bcrypt.compareSync(password, hashedPassword);

      // if (result) {
      resolve(result);
      // }
      // reject(new Error("비밀번호가 맞지 않습니다"));
    });
  }
  // password는 사용자가 우리한테 넘겨준 기본 평문 password
  // hashString은 우리가 이전에 암호화한 password(this.password)에 저장해둔 password

  @BeforeInsert()
  @BeforeUpdate()
  async savePassword(): Promise<void> {
    if (this.inputPassword) {
      const hashedPassword = await this.hashPassword(this.inputPassword); // hashPassword가 끝나길 기다림
      // 암호화된 password
      this.password = hashedPassword;
      this.inputPassword = null;
    }
  }

  private hashPassword(password: string): Promise<string> {
    const salt = bcrypt.genSaltSync(
      parseInt(process.env.BCRYPT_ROUNDS || "10", 10)
    );

    return new Promise((resolve, reject) => {
      const hashedPassword = bcrypt.hashSync(password, salt);
      if (hashedPassword) {
        resolve(hashedPassword);
      }
      reject(new Error("Hashed Failed"));
    });
  }
}

export default User;
