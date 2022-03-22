import { ValidationError } from 'class-validator';

export function validationErrors(errors: ValidationError[]) {
  if (errors.length > 0) {
    throw new Error(
      `Configuration failed - Is there an environment variable missing? ${JSON.stringify(
        errors.map((v) => {
          return { [v.property]: v.constraints };
        }),
        null,
        2,
      )}`,
    );
  }
}

export function getEnvFile(): string {
  const nodeEnv = process.env.NODE_ENV;
  return nodeEnv ? `.${nodeEnv}.env` : '.env';
}
