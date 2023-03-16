// Example of GridView using FlatList in React Native
// https://aboutreact.com/example-of-gridview-using-flatlist-in-react-native/

// import React in our code
import React, {useEffect, useState} from 'react';
import estilos from './estilos';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Button,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';


const data = [
    { select: false, equipamento: 'Chicken Biryani', setor: 21, gender: '' }, //If user select this row then this whole object will return to you with select true in this case
   { select: false, equipamento: 'Chiken koofta', setor: 21, gender: 'male' },
   { select: false, equipamento: 'Chicken sharwma', setor: 21, gender: 'male' },
   { select: false, equipamento: 'Chicken Biryani', setor: 21, gender: 'male' }, //If user select this row then this whole object will return to you with select true in this case
   { select: false, equipamento: 'Chiken koofta', setor: 21, gender: 'male' },
   { select: false, equipamento: 'Chicken sharwma', setor: 21, gender: 'male' },
   { select: false, equipamento: 'Chicken Biryani', setor: 21, gender: 'male' }, //If user select this row then this whole object will return to you with select true in this case
   { select: false, equipamento: 'Chiken koofta', setor: 21, gender: 'male' },
   { select: false, equipamento: 'Chicken sharwma', setor: 21, gender: 'male' },
   { select: false, equipamento: 'Chicken Biryani', setor: 21, gender: 'male' }, //If user select this row then this whole object will return to you with select true in this case
   { select: false, equipamento: 'Chiken koofta', setor: 21, gender: 'male' }
];

const nameOfCols = ['select', 'equipamento', 'setor', 'gender'];


const ListFooter = () => {
  //View to set in Footer
  return (<>
  <View style={styles.headerFooterStyle}>
      <Text style={styles.textStyle}>This is Footer</Text>
      <Text style={styles.textStyle}>This is hdj</Text>
    </View>
  <View style={styles.headerFooterStyle}>
      <Text style={styles.textStyle}>This is Footer</Text>
    </View>
  </>
    
  );
};


const App = () => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    let items = data.map((v, i) => {
      return {
        id: i,
        name:'kathe'
      };
    });
    setDataSource(items);
  }, []);

  return (
    <SafeAreaView style={estilos.container}>
      <FlatList
     
             data={dataSource}

        renderItem={({item}) => (<>
          <View
            style={{
                flex:1,
              flexDirection: 'row',
              margin: 1
              , width: '100%'
            }}>

<Text
                    style={estilos.item}
                    onPress={() => getItem(item)}>
                    {item.id}
                    {' - '}
                    {/* {item.title.toUpperCase()} */}    
                    <TouchableOpacity><Text>{item.id}</Text></TouchableOpacity>
                <TouchableOpacity><Text>{item.id}</Text></TouchableOpacity>            
                </Text>
             
      </View>

         </>
        )}
        //Setting the number of column
        numColumns={1}
        
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: 'white',
  },
  
  itemStyle: {
    backgroundColor: '#0066CC',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 10,
    color: 'white',
},
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  emptyListStyle: {
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
  },
  headerFooterStyle: {
    width: '100%',
    height: 45,
    backgroundColor: '#606070',
  },
  textStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    padding: 7,
  },
});