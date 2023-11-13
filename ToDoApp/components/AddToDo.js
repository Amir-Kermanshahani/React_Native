import React, { useState } from "react";
import { StyleSheet, Button, TextInput, Text, View } from "react-native";

const AddToDo = ({submitHandler}) => {
  const [text, setText] = useState("");
  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        placeholder="New To Do ..."
        onChangeText={changeHandler}
        style={styles.input}
      />
      <Button
        onPress={() => submitHandler(text)}
        title="Add To Do"
        color="green"
      />
    </View>
  );
};

export default AddToDo;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
