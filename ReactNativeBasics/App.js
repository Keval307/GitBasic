/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import GoalItem from './components/GoalItem.js';
import GoalInput from './components/GoalInput.js';

function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoal(currentGoal => [
      ...currentGoal,
      {id: Math.random().toString(), value: goalTitle},
    ]);
    setIsAddMode(false);
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoal(currentGoal => {
      return currentGoal.filter(goal => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <Button
        title="Add New Goal"
        onPress={() => {
          setIsAddMode(true);
        }}
      />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
      <FlatList
        data={courseGoal}
        keyExtractor={(item, index) => item.id}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});

export default App;

// const [name, setName] = useState('');
//   const [goal, setGoal] = useState('');
//   const [warning, setWarning] = useState(false);
//   //const [totalGoal, setTotalGoal] = useState([]);
//   const [submitted, setSubmitted] = useState(false);
//   const [items, setItems] = useState([
//     {name: 'Item 1'},
//     {name: 'Item 2'},
//     {name: 'Item 3'},
//     {name: 'Item 4'},
//     {name: 'Item 5'},
//     {name: 'Item 6'},
//     {name: 'Item 7'},
//     {name: 'Item 8'},
//     {name: 'Item 9'},
//     {name: 'Item 10'},
//     {name: 'Item 11'},
//     {name: 'Item 1'},
//     {name: 'Item 2'},
//     {name: 'Item 3'},
//     {name: 'Item 4'},
//     {name: 'Item 5'},
//     {name: 'Item 6'},
//     {name: 'Item 7'},
//     {name: 'Item 8'},
//     {name: 'Item 9'},
//     {name: 'Item 10'},
//     {name: 'Item 11'},
//   ]);

//   const [Data, setData] = useState([
//     {
//       title: 'Title 1',
//       data: ['Item 1-1', 'Item 1-2', 'Item 1-3', 'Item 1-4'],
//     },
//     {
//       title: 'Title 2',
//       data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
//     },
//     {
//       title: 'Title 3',
//       data: ['Item 3-1'],
//     },
//     {
//       title: 'Title 3',
//       data: ['Item 3-1', 'Item 3-2', 'Item 3-3'],
//     },
//     {
//       title: 'Title 3',
//       data: ['Item 3-1', 'Item 3-2', 'Item 3-3'],
//     },
//     {
//       title: 'Title 3',
//       data: ['Item 3-1', 'Item 3-2', 'Item 3-3'],
//     },
//     {
//       title: 'Title 3',
//       data: ['Item 3-1', 'Item 3-2', 'Item 3-3'],
//     },
//     {
//       title: 'Title 4',
//       data: ['Item 4-1'],
//     },
//   ]);

//   const [Refreshing, setRefreshing] = useState(false);

//   const [loading, setLoading] = useState(false);
//   const [text, setText] = useState("")

//   const buttonPressesed = () => {
//     setLoading(true)
//     setTimeout(() => {
//       Alert.alert("Welcome", "Welcome to Simform")
//       setLoading(false)
//     },3000)

//   }

//   const refreshingMethod = () => {
//     setRefreshing(true);
//     setData([
//       ...Data,
//       {
//         title: 'Title 5',
//         data: ['Item 5-1', 'Item 5-2', 'Item 5-3'],
//       },
//     ]);
//     setRefreshing(false);
//   };

//   const inputNameHandler = enteredText => {
//     setName(enteredText);
//   };

//   const inputGoalHandler = enteredText => {
//     setGoal(enteredText);
//   };

//   const onPressHandler = () => {
//     if (name.length > 3) {
//       setSubmitted(!submitted);
//     } else {
//       setWarning(true);
//     }
//     // setTotalGoal(currentGoal => [...currentGoal, goal]);
//   };

//   const endEditing = () => {
//     console.log('End');
//   };

//   const Divider = () => {
//     return (
//       <View
//         style={{
//           height: 10,
//           width: '100%',
//           backgroundColor: 'white',
//         }}
//       />
//     );
//   };

//   const Head = () => {
//     return (
//       <View style={styles.item}>
//         <Text style={styles.itemText}>Header</Text>
//       </View>
//     );
//   };

// <ImageBackground
//   style={{flex: 1}}
//   source={{
//     uri: 'https://cdn.pixabay.com/photo/2013/07/12/12/35/texture-145968_960_720.png',
//   }}>
{
  /* <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle='dark-content'
        //showHideTransition='fade'
        hidden={false} 
        networkActivityIndicatorVisible={true}
        //translucent={true}
        /> */
}

{
  /* <KeyboardAvoidingView
         style={styles.container}
         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
         contentContainerStyle={{backgroundColor:'red'}}
        //  enabled={false}
        keyboardVerticalOffset={10}
        >
          <Text style={styles.text}>Page content</Text>
          <ScrollView>
            {items.map((value, index) => {
              return (
                <View style={styles.item} key={index}>
                  <TextInput style={styles.itemText} value={value.name}/>
                </View>
              );
            })}
          </ScrollView>
        </KeyboardAvoidingView> */
}

{
  /* <SafeAreaView style={{flex: 1}}>
        <TextInput 
          style={{height: 40,margin:5,borderWidth:3, borderColor:'black'}} 
          onChangeText={(text) => setText(text)}
        />
        <ActivityIndicator 
         animating={false}
         size='small'
         color='red'
        //  hidesWhenStopped={false}

        />

         <Button title='ADD' onPress={buttonPressesed} /> 
      </SafeAreaView> */
}

{
  /* <View style={styles.screen}>
        <Modal
          visible={warning}
          transparent={false}
          onRequestClose={() => setWarning(false)}
          animationType="fade"
          //onShow={() => console.log('Model Called')}
          //onDismiss={() => console.log('Model Called in IOS')}
          //presentationStyle='pageSheet'
        >
          <TouchableOpacity
            style={styles.centered_view}
            onPress={() => setWarning(false)}>
            <TouchableWithoutFeedback>
              <View style={styles.warning_model}>
                <View style={styles.warning_title}>
                  <Text style={styles.text}>Warning !</Text>
                </View>
                <View style={styles.warning_body}>
                  <Text style={styles.text}>
                    Name is Longer than three character
                  </Text>
                </View>
                <Pressable
                  onPress={() => setWarning(false)}
                  style={styles.warning_button}>
                  <Text style={styles.text}>Close</Text>
                </Pressable>
              </View>
            </TouchableWithoutFeedback>
          </TouchableOpacity>
        </Modal>

        <Text style={styles.text}>Enter Your Name: </Text>

        <TextInput
          placeholder="e.g. John"
          style={styles.input}
          onChangeText={inputNameHandler}
          onEndEditing={endEditing}
          autoCapitalize={'words'}
          //defaultValue={'John'}
        />

        {/* <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your Goal"
          style={styles.input}
          onChangeText={inputGoalHandler}
          value={goal}
          // multiline = {true}
          editable={true}
          autoCorrect={true}
          maxLength={15}
          keyboardType="default"
          secureTextEntry

          // value = {enteredGoal}
        />  
        {/* <Button
          // title={submitted ? 'Clear' : 'Add'}
          title='Add'
          onPress={onPressHandler}
          //disabled={submitted}
          color='#
        />  */
}

{
  /* <Pressable
          onPressIn={onPressHandler}
          delayLongPress={1000}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
          style={styles.touchableContainer}>
          <Text style={styles.text} gv>
            Add
          </Text>
        </Pressable> */
}

{
  /* <TouchableWithoutFeedback
          style={styles.touchableContainer}
          onPress={onPressHandler}
          activeOpacity={0.3}
          underlayColor="#0ff">
          <Text style={styles.text}>{submitted ? 'Clear' : 'Add'}</Text>
        </TouchableWithoutFeedback>*/
}

{
  /* {submitted ? (
          <View>
            <Text style={styles.text}>Your Name is: {name}</Text>
             <Text style={styles.text}>Your Goal is: {goal}</Text> 
            <Image
              style={styles.image}
              source={require('./images/done.jpeg')}
            />
          </View>
        ) : (
          <Image style={styles.image} source={require('./images/error.jpeg')} />
        )}
      </View>  */
}

{
  /* <Fragment name="Hello" id={12} /> */
}

{
  /* <ScrollView
      horizontal={false}
      decelerationRate='normal'
      keyboardDismissMode='on-drag'
      style={styles.outerContainer}
      contentContainerStyle={styles.innerContainer}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={refreshingMethod}
          colors={["#f0f"]} //Android
          tintColor='#f0f' //IOS
          title='refreshing...' //IOS
          titleColor={'chartreuse'}//IOS
        />
      }
      >
      {items.map(value => {
        return (
          <View style={styles.item} key={value.key}>
            <Text style={styles.itemText}>
              {value.item}
            </Text>
          </View>
        );
      })}
    </ScrollView> */
}

{
  /* <FlatList
        //numColumns={2}
        //horizontal
        //inverted
        data={items}
        keyExtractor={(item,index) => index.toString()}
        renderItem={({item}) => (
          // console.log(value.item)
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        )} 
        ItemSeparatorComponent={Divider}
        ListEmptyComponent={<Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>List is Empty</Text>}
        //initialScrollIndex={2}
        onEndReached={()=> Alert.alert("End")}
        onEndReachedThreshold={0.5}
        //columnWrapperstyle={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={Refreshing}
            onRefresh={refreshingMethod}
            colors={["#f0f"]} //Android
            tintColor='#f0f' //IOS
            title='refreshing...' //IOS
            titleColor={'chartreuse'}//IOS
          />
        }
      /> */
}

{
  /* <SectionList 
        keyExtractor={(item,index) => index.toString()}
        sections={Data}
        renderItem={({item}) => (
          // console.log(value)
          <Text style={styles.itemText}>{item}</Text>
          //<TextInput style={{borderColor:'#f0f'}} />
            // <Text style={styles.itemText}>{section.data}</Text> => this all items in single text because data is array
        )}
        renderSectionHeader={({section}) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{section.title}</Text>
          </View>
        )}
        //ItemSeparatorComponent={Divider}
        //SectionSeparatorComponent={Divider}
        inverted={false}
        ListEmptyComponent={<Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>List is Empty</Text>}
        //ListFooterComponent={Head}
        stickySectionHeadersEnabled={false}
        //removeClippedSubviews={true}
      
        // refreshControl={
        //   <RefreshControl
            refreshing={Refreshing}
            onRefresh={refreshingMethod}
        //     colors={["#f0f"]} //Android
        //     tintColor='#f0f' //IOS
        //     title='refreshing...' //IOS
        //     titleColor={'chartreuse'}//IOS
        //   />
        // }
      /> */
}

{
  /* <View>
        {totalGoal.map((value, index) => (
          <Text key={index} style={styles.text}>
            {value}
          </Text>
        ))}
      </View> */
}

{
  /* <View
        style={{
          // padding: 20,
          flexDirection: 'row',
          direction: 'ltr',
          width: '90%',
          height: 100,
          justifyContent: 'flex-end',
          alignItems: 'stretch',
        }}>
        <View
          style={{
            backgroundColor: 'red',
            flex: 1,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Text>1</Text>
        </View>
        <View
          style={{
            backgroundColor: 'blue',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>2</Text>
        </View>
        <View
          style={{
            backgroundColor: 'green',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>3</Text>
        </View>
      </View>
      <Image
           style={styles.image}
           source={{uri: 'https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_960_720.png'}}
           />*/
}
// </ImageBackground>

// const styles = StyleSheet.create({
//   screen: {
//     margin: 50,
//     alignItems: 'center',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   input: {
//     width: 220,
//     borderBottomColor: 'black',
//     borderWidth: 1,
//     borderRadius: 5,
//     padding: 10,
//     margin: 10,
//   },
//   text: {padding: 4, textAlign: 'center', fontSize: 20},
//   touchableContainer: {
//     width: 65,
//     height: 30,
//     backgroundColor: '#00f',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     margin: 5,
//     width: 100,
//     height: 100,
//     resizeMode: 'center',
//     backgroundColor: 'yellow',
//     // borderRadius: 5
//   },
//   item: {
//     backgroundColor: 'blue',
//     margin: 10,
//     // justifyContent: 'center',
//     // alignItems: 'center'
//   },
//   itemText: {
//     textAlign: 'center',
//     color: 'black',
//     fontSize: 35,
//     fontStyle: 'italic',
//     margin: 10,
//   },
//   outerContainer: {
//     backgroundColor: 'red',
//     borderColor: 'black',
//     borderRadius: 5,
//     overflow: 'hidden',
//   },
//   innerContainer: {
//     backgroundColor: 'green',
//     margin: 20,
//     borderColor: 'black',
//     borderWidth: 4,
//     borderRadius: 10,
//   },
//   centered_view: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#00000099',
//   },
//   warning_model: {
//     width: 300,
//     height: 300,
//     backgroundColor: '#ffffff',
//     borderWidth: 1,
//     borderColor: 'black',
//     borderRadius: 20,
//   },
//   warning_title: {
//     backgroundColor: 'yellow',
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//   },
//   warning_body: {
//     height: 200,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   warning_button: {
//     backgroundColor: '#00ffff',
//   },
//   container: {
//     flex: 1,
//     // backgroundColor: 'red'
//   },
// });

// { key: 1, item: 'Item 1' },
// { key: 2, item: 'Item 2' },
// { key: 3, item: 'Item 3' },
// { key: 4, item: 'Item 4' },
// { key: 5, item: 'Item 5' },
// { key: 6, item: 'Item 6' },
// { key: 7, item: 'Item 7' },
// { key: 8, item: 'Item 8' },
// { key: 44, item: 'Item 9' },
// { key: 68, item: 'Item 27' },
// { key: 0, item: 'Item 78' }
