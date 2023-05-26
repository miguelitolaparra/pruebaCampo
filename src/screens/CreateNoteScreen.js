import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default function CreateNoteScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSaveNote = () => {
    // Lógica para guardar la nota en la base de datos
    // Puedes utilizar Firebase o cualquier otra base de datos
    // Aquí solo se muestra un ejemplo simple de guardar en el estado local
    const note = {
      title,
      description,
      image,
    };
    console.log('Nota guardada:', note);
    setTitle('');
    setDescription('');
    setImage(null);
  };

  const handleSelectImage = () => {
    const options = {
      title: 'Seleccionar imagen',
      cancelButtonTitle: 'Cancelar',
      takePhotoButtonTitle: 'Tomar foto',
      chooseFromLibraryButtonTitle: 'Seleccionar de la galería',
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('Selección de imagen cancelada');
      } else if (response.error) {
        console.log('Error al seleccionar imagen:', response.error);
      } else {
        const source = { uri: response.uri };
        setImage(source);
      }
    });
  };

  return (
    <View style={styles.container}>
      {image && <Image source={image} style={styles.image} />}
      <TouchableOpacity onPress={handleSelectImage}>
        <View style={styles.imageButton}>
          <Text style={styles.imageButtonText}>Seleccionar imagen</Text>
        </View>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        value={description}
        onChangeText={text => setDescription(text)}
        multiline
      />
      <Button title="Guardar" onPress={handleSaveNote} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  imageButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  imageButtonText: {
    color: 'white',
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});

