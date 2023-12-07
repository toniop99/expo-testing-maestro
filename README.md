# Maestro Expo Test
> ℹ️ [Doc](https://maestro.mobile.dev/api-reference/commands)

## Install Maestro
[Installing Maestro - Maestro by mobile.dev.url](https://maestro.mobile.dev/getting-started/installing-maestro)

## Running Tests
> ℹ️ Contiuous Mode
>
> `maestro test -c flow.yaml`

> ℹ️ Record tests
>
> `maestro record -c flow.yaml`

### Linux/Mac
- Start emulator
- Install build located in root directory on emulator
- Run `maestro test -c e2e/sign-in.yaml`

### Windows
- Start emulator
- Install build located in root directory on emulator
- On local pc, `adb -a -P 5037 nodaemon server`
- On wsl:
  - `adb kill-server`
  - `export ADB_SERVER_SOCKET=tcp:<local-pc-ipv4>:5037`
  - `adb devices` # should show active emulator on local pc
  - `maestro --host <local-pc-ipv4> test -c <path-to-project>/e2e/sign-in.yaml`

## Running Maestro Studio

### Linux/Mac
- `maestro studio`
 
### Windows
  - maestro --host <local-pc-ipv4> studio