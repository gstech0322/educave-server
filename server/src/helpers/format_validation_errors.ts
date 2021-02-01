import { ValidationError } from "class-validator";

export default function formatValidationErrors(errors: ValidationError[]): any[] {
    const formattedErrors = [];
    for (const error of errors) {
        formattedErrors.push({ name: error.property, error: Object.values(error.constraints!)[0] });
    }

    return formattedErrors;
}