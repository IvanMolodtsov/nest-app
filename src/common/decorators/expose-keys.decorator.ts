import {
  ClassConstructor,
  plainToInstance,
  Transform,
} from 'class-transformer';

export function ExposeKeys<T extends object>(type: ClassConstructor<T>) {
  return Transform(({ obj }) => {
    const tempConfig = plainToInstance(type, obj, {
      excludeExtraneousValues: true,
      enableImplicitConversion: true,
    });
    return tempConfig;
  }, {});
}
