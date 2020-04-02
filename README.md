# Testcase for bug in electron's `setTimeout` when `ELECTRON_RUN_AS_NODE` is set

In this repo, we test this by running a simple script that runs setTimeout using multiple versions of electron.

Simply do:
```bash
npm i
npm start
```

When running this, we can see that with node, `IT WORKED!` is printed, but with electron versions 6 through 9 it's not.
