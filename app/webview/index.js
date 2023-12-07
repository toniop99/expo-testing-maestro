import WebView from "react-native-webview";
import {View, StyleSheet, Pressable, Text} from "react-native";
import {Link} from "expo-router";

export default function Page() {

    return (
        <View style={styles.container}>
            <WebView
                source={{ uri: 'https://expo.dev' }}
            />
            <Link href="/" asChild>
                <Pressable style={{backgroundColor: 'red'}}>
                    <Text>Go to home</Text>
                </Pressable>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#fff",
        justifyContent: "space-between",
    },
    webview: {
        flex: 1,
        width: "100%",
        height: "80%",
    }
})