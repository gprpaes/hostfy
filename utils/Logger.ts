import { ANSI_COLORS } from "../const";
abstract class Logger {
  public static error(component: string, message: string): void {
    console.log(
      ANSI_COLORS.red,
      `[ERROR]: ${component} =>`,
      ANSI_COLORS.default,
      message
    );
  }

  public static info(component: string, message: string): void {
    console.log(
      ANSI_COLORS.blue,
      `[INFO]: ${component} =>`,
      ANSI_COLORS.default,
      message
    );
  }
  public static success(component: string, message: string): void {
    console.log(
      ANSI_COLORS.green,
      `[SUCCESS]: ${component} =>`,
      ANSI_COLORS.default,
      message
    );
  }
}

export default Logger;
