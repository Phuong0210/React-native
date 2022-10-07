import { useState } from "react";
import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import Task from "./components/Task";

export default function App() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        setTasks([...tasks, task]);
        setTask(null);
    };

    const completeTask = (index) => {
        let tasksCopy = [...tasks];
        tasksCopy.splice(index, 1);
        console.log(tasksCopy);
        setTasks(tasksCopy);
    };

    return (
        <View style={styles.container}>
            <View style={styles.taskWrapper}>
                <Text style={styles.sectionTitle}>Today's tasks</Text>
                <View style={styles.items}>
                    {tasks.map((item, index) => {
                        return (
                            <TouchableOpacity
                                onPress={() => completeTask(index)}
                                key={index}
                            >
                                <Task text={item} />
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
            <KeyboardAvoidingView
                style={styles.writeTaskWrapper}
                behavior="height"
            >
                <TextInput
                    style={styles.input}
                    placeholder="Add new task ..."
                    value={task}
                    onChangeText={(text) => setTask(text)}
                />
                <TouchableOpacity onPress={addTask}>
                    <View style={styles.addWrapper}>
                        <Text>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8EAED",
    },
    taskWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    items: {
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "bold",
    },
    input: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: "#FFF",
        borderRadius: 60,
        width: 250,
        borderWidth: 1,
        borderColor: "#C0C0C0",
    },
    writeTaskWrapper: {
        position: "absolute",
        bottom: 60,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignContent: "center",
    },
    addText: {},
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: "#FFF",
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#C0C0C0",
        borderWidth: 1,
    },
});