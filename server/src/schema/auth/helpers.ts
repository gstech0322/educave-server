import bcrypt from 'bcrypt';

export function passwordValid(hashedPassword: string, enteredPassword: string): boolean {
    return bcrypt.compareSync(enteredPassword, hashedPassword);
}
