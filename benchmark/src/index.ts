import "fs";
import { fxLazyVsVanillaEager, fxVsVanilla, fxVsLodash, fxVsRxjs } from "./bench";

const args = process.argv.slice(2);

const run = (name: string) => {
  switch (name) {
    case "lazy":
      console.log("Fx (Lazy evaluation) vs Array (Eager evaluation)");
      fxLazyVsVanillaEager.run();
      break;
    case "vanilla":
      console.log("Fx vs Vanilla");
      fxVsVanilla.run();
      break;
    case "lodash":
      console.log("Fx vs Lodash");
      fxVsLodash.run();
      break;
    case "rxjs":
      console.log("Fx vs RxJS");
      fxVsRxjs.run();
      break;
    default:
      console.log(`Unknown benchmark: ${name}`);
      process.exit(1);
  }
};

args.forEach(run);

process.exit(0);
