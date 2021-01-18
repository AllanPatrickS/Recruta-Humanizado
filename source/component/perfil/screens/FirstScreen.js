import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { HelperText, TextInput } from 'react-native-paper';

export default function PerfilFirstScreen({ carRef }) {
  const [genreSelected, setGenreSelected] = useState('');
  const [genres] = useState(['Feminino', 'Masculino', 'Outro']);
  const [genresList, setGenresList] = useState([]);
  const [ident, setIdent] = useState('');
  const [idents] = useState(['Branca', 'Preta', 'Parda', 'Indígena', 'Amarela', 'Não desejo declarar']);
  const [identsList, SetIdentList] = useState([]);
  const [show, setShow] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [date, setDate] = useState(new Date());
  const [dateShow, setDateShow] = useState('');
  const [nameError, setNameError] = useState(false);
  const [name, setName] = useState('');

  const dateChange = (_, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDateShow(currentDate.toLocaleDateString())
  };

  const proceed = () => {
    if (name.length == 0 || dateShow.length == 0) {
      setDateError(true);
      setNameError(true);
    } else {
      carRef.current.snapToNext()
    }
  }

  const setGenres = () => {
    genres.forEach((item, _) => {
      genresList.push(<Picker.Item label={item} value={item} key={item}/>)
    })
    setGenresList(genresList);
  }

  const setIdents = () => {
    idents.forEach((item, _) => {
      identsList.push(<Picker.Item label={item} value={item} key={item}/>)
    })
    SetIdentList(identsList)
  }

  useEffect(() => {
    setGenres()
    setIdents()
  }, []);

  return (
    <View style={styles.background} >
      <View style={styles.screen}>

        <Text style={styles.titleText}>Como você se chama?</Text>
        <TextInput
          style={[styles.box, { marginBottom: '5%' }]}
          placeholder={'Digite o seu nome e sobrenome'}
          placeholderTextColor='#4460F1'
          onChangeText={text => setName(text)}
          value={name}
        />
        <HelperText type="error" visible={nameError}>
          Por favor digite um nome!
        </HelperText>
        <Text style={styles.titleText}>Data de nascimento</Text>
        <TouchableHighlight
          underlayColor={'#ffffff'}
          onPress={() => setShow(true)}
        >
          <TextInput
            style={[styles.box, { marginBottom: '5%' }]}
            placeholder={'Dia/Mês/Ano'}
            placeholderTextColor='#4460F1'
            value={dateShow}
            editable={false}
          />
        </TouchableHighlight>
        <HelperText type="error" visible={dateError}>
          Por favor escolha uma data!
        </HelperText>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={dateChange}
          />
        )}

        <Text style={styles.titleText}>Gênero*</Text>
        <Picker
          selectedValue={genreSelected}
          style={styles.picker}
          onValueChange={(itemValue, _) =>
            setGenreSelected(itemValue)
          }>
          {genresList}
        </Picker>

        <Text style={styles.titleText}>Eu me identifico como*</Text>
        <Picker
          selectedValue={ident}
          style={styles.picker}
          onValueChange={(itemValue, _) =>
            setIdent(itemValue)
          }>
          {identsList}
        </Picker>

        <Text style={styles.bottomText}>*Utilizamos esses dados para entender melhor o nosso público e para melhorar a sua experiência. Nenhum dado é exposto sem sua autorização.</Text>

        <TouchableHighlight
          style={styles.nextButton}
          underlayColor={'#4460F1'}
          onPress={proceed}
        >
          <Text style={styles.nextButtonText}>Continuar</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  screen: {
    flexDirection: 'column',
    marginTop: '10%',
    marginHorizontal: '11%'
  },
  space: {
    marginBottom: '5%'
  },
  titleText: {
    color: '#204559',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: '3%'
  },
  box: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    color: '#4460F1',
    borderRadius: 9,
    paddingLeft: '10%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2,
    elevation: 3,
    marginBottom: '5%'
  },
  picker: {
    flexDirection: 'column',
    color: '#4460F1',
    borderRadius: 90,
    paddingLeft: '10%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2,
    elevation: 3,
    marginBottom: '5%'
  },
  item: {
    color: '#4460F1',
  },
  bottomText: {
    color: '#204559',
    fontSize: 13,
    textAlign: 'center',
    marginBottom: '10%'
  },
  nextButton: {
    backgroundColor: '#4460F1',
    borderRadius: 9,
    paddingVertical: '4%',
    marginBottom: '10%'
  },
  nextButtonText: {
    color: '#ffffff',
    alignSelf: 'center',
    fontSize: 17
  }
})