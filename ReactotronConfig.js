import Reactotron, {networking} from "reactotron-react-native";
import {NativeModules} from "react-native";


const hostname = NativeModules.SourceCode.scriptURL
    .split("://")[1] // Remove the scheme
    .split("/")[0] // Remove the path
    .split(":")[0]; // Remove the port

Reactotron.setAsyncStorageHandler()
    .configure({
        host: hostname
    }) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(networking())
    .connect(); // let's connect!