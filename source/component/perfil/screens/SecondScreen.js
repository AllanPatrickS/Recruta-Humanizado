import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { HelperText } from 'react-native-paper';

export default function SecondScreen({ carRef }) {
  const [moments] = useState(['Ensino Fundamental', 'Ensino Médio', 'Ensino Universitário']);
  const [momentsList, setMomentsList] = useState([]);
  const [momentSelected, setMomentSelected] = useState('');
  const [yearsEF] = useState(['8º', '9º']);
  const [yearsEM] = useState(['1º', '2º', '3º']);
  const [yearsEU] = useState(['1º', '2º', '3º', '4º', '5º', '6º', '7º', '8º', '9º', '10º']);
  const [yearsList, setYearsList] = useState([]);
  const [yearSelected, setYearSelected] = useState('');
  const [institution, setInstitution] = useState('');
  const [institutionError, seInstitutionError] = React.useState(false);
  const [works] = useState([['Jovem aprendiz', 'Meio período'], ['Estágio', 'Trainee']]);
  const [worksList, setWorksList] = useState([]);
  const [worksSelected, setWorksSelected] = useState([]);
  const [workError, setWorkError] = React.useState(false);

  const setMoments = () => {
    moments.forEach((item, _) => {
      momentsList.push(<Picker.Item label={item} value={item} key={item} />)
    })
    setMomentsList(momentsList)
  }

  const setWorkSelec = (value) => {
    if (worksSelected.find(elem => elem == value)) {
      setWorksSelected(worksSelected.filter(item => item !== value));
    } else {
      worksSelected.push(value);
      setWorksSelected(worksSelected);
    }
  }

  const setworks = () => {
    works.forEach((item, index) => {
      worksList.push(
        <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableHighlight
            style={worksSelected.find(elem => elem == item[0]) ? [styles.box, styles.blueCareerButton] : [styles.box, styles.careerButton]}
            underlayColor={'#4460F1'}
            onPress={() => setWorkSelec(item[0])}
          >
            <Text style={worksSelected.find(elem => elem == item[0]) ? styles.blueCareerButtonText : styles.careerButtonText}>{item[0]}</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={worksSelected.find(elem => elem == item[1]) ? [styles.box, styles.blueCareerButton] : [styles.box, styles.careerButton]}
            underlayColor={'#4460F1'}
            onPress={() => setWorkSelec(item[1])}
          >
            <Text style={worksSelected.find(elem => elem == item[1]) ? styles.blueCareerButtonText : styles.careerButtonText}>{item[1]}</Text>
          </TouchableHighlight>
        </View>)
    })
    setWorksList(worksList)
  }

  const setback = () => {
    carRef.current.snapToPrev()
  }

  const proceed = () => {
    if (institution.length == 0) {
      seInstitutionError(true);
      if (worksList.length != 0) {
        setWorkError(false);
      }
    } else if (worksList.length == 0) {
      setWorkError(true);
      if (institution.length != 0) {
        seInstitutionError(false);
      }
    } else {
      carRef.current.snapToNext()
    }
  }

  const setYears = (index) => {
    const list = [];
    switch (index) {
      case 0:
        yearsEF.forEach((item, _) => {
          list.push(<Picker.Item label={item} value={item} key={item} />)
        })
        break;
      case 1:
        yearsEM.forEach((item, _) => {
          list.push(<Picker.Item label={item} value={item} key={item} />)
        })
        break;
      case 2:
        yearsEU.forEach((item, _) => {
          list.push(<Picker.Item label={item} value={item} key={item} />)
        })
        break;
    }
    setYearsList(list)
  }

  useEffect(() => {
    setMoments();
    setworks();
  }, []);

  return (
    <View style={styles.background}>
      <View style={styles.screen}>
        <Text style={styles.titleText}>No momento estou</Text>
        <Picker
          selectedValue={momentSelected}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => {
            setMomentSelected(itemValue);
            setYears(itemIndex);
          }}>
          {momentsList}
        </Picker>

        <Text style={styles.titleText}>Qual ano ou período?</Text>
        <Picker
          selectedValue={yearSelected}
          style={styles.picker}
          onValueChange={(itemValue, _) =>
            setYearSelected(itemValue)
          }>
          {yearsList}
        </Picker>

        <Text style={styles.titleText}>Nome da instituição de ensino</Text>
        <TextInput
          style={styles.box}
          placeholder={'Digite o nome da instituição'}
          placeholderTextColor='#4460F1'
          onChangeText={text => setInstitution(text)}
          value={institution}
        />
        <HelperText type="error" visible={institutionError}>
          Por favor digite uma instituição de ensino!
        </HelperText>

        <View style={styles.careerTitleText}>
          <Text style={styles.titleText}>Estou a procura de</Text>
          <Text style={styles.smallText}>Selecione um ou mais</Text>
        </View>

        {worksList}

        <HelperText type="error" visible={workError}>
          Por favor selecione pelo menos um tipo de trabalho!
        </HelperText>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableHighlight
            style={styles.backButton}
            underlayColor={'#4460F1'}
            onPress={setback}
          >
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.nextButton}
            underlayColor={'#4460F1'}
            onPress={proceed}
          >
            <Text style={styles.continueButtonText}>Continuar</Text>
          </TouchableHighlight>
        </View>
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
  titleText: {
    color: '#204559',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: '5%'
  },
  box: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
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
  careerTitleText: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  smallText: {
    color: '#204559',
    fontSize: 11,
    textAlign: 'center',
    alignSelf: 'center'
  },
  blueCareerButton: {
    backgroundColor: '#4460F1',
    width: '48%',
    paddingLeft: '0%',
    paddingVertical: '5%',
    marginBottom: '5%'
  },
  careerButton: {
    backgroundColor: '#ffffff',
    width: '48%',
    paddingLeft: '0%',
    paddingVertical: '5%',
    marginBottom: '5%'
  },
  careerButtonText: {
    color: '#4460F1',
    alignSelf: 'center',
    fontSize: 17
  },
  blueCareerButtonText: {
    color: '#ffffff',
    alignSelf: 'center',
    fontSize: 17
  },
  nextButton: {
    backgroundColor: '#4460F1',
    width: '48%',
    borderRadius: 9,
    paddingVertical: '4%',
    marginBottom: '10%'
  },
  backButton: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#4460F1',
    width: '48%',
    borderRadius: 9,
    paddingVertical: '4%',
    marginBottom: '10%'
  },
  continueButtonText: {
    color: '#ffffff',
    alignSelf: 'center',
    fontSize: 17
  },
  backButtonText: {
    color: '#4460F1',
    alignSelf: 'center',
    fontSize: 17
  }
})