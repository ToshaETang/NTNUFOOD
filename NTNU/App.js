import { StatusBar } from 'react-native';
import React, {useState} from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity,Alert,SafeAreaView,TouchableHighlight,AppRegistry} from 'react-native';
import storeData from './store.json';

{/* ------------會改的參數------------ */}

const maxSearchCount=50;

{/* -------------------------------- */}


let b1=0;
let b2=0;
let b3=0;
let b4=0;
let b5=0;
let b6=0;

let rice=false;
let noodle=false;
let vegetarian=false;
let otherType=false;
let takeOut=false;
let dine=false;

const count = Object.keys(storeData).length;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}



{/* ================================================================== */}


export default function App() {

    const [buttonText1, setButtonText1] = useState('     ');
    function handleClick1(){
       b1=b1+1;
       if(b1%2==1){
        setButtonText1(' V  ');
        rice=true;
       }
       else{
        setButtonText1('     ');
        rice=false;
       }
    }

    const [buttonText2, setButtonText2] = useState('     ');
    function handleClick2(){
       b2=b2+1;
       if(b2%2==1){
        setButtonText2(' V  ');
        noodle=true;
       }
       else{
        setButtonText2('     ');
        noodle=false;
       }
    }

    const [buttonText3, setButtonText3] = useState('     ');
    function handleClick3(){
       b3=b3+1;
       if(b3%2==1){
        setButtonText3(' V  ');
        vegetarian=true;
       }
       else{
        setButtonText3('     ');
        vegetarian=false;
       }
    }

    const [buttonText4, setButtonText4] = useState('     ');
    function handleClick4(){
       b4=b4+1;
       if(b4%2==1){
        setButtonText4(' V  ');
        otherType=true;
       }
       else{
        setButtonText4('     ');
        otherType=false;
       }
    }

    const [buttonText5, setButtonText5] = useState('     ');
    function handleClick5(){
       b5=b5+1;
       if(b5%2==1){
        setButtonText5(' V  ');
        takeOut=true;
       }
       else{
        setButtonText5('     ');
        takeOut=false;
       }
    }

    const [buttonText6, setButtonText6] = useState('     ');
    function handleClick6(){
       b6=b6+1;
       if(b6%2==1){
        setButtonText6(' V  ');
        dine=true;
       }
       else{
        setButtonText6('     ');
        dine=false;
       }
    }


    function search(){

        let result = storeData;

        if(vegetarian==true){
            result = result.filter(function (e) { return e.vegetarian == true; })
        }
        if(takeOut==true){
            result = result.filter(function (e) { return e.takeOut == true; })
        }
        if(dine==true){
            result = result.filter(function (e) { return e.dine == true; })
        }
        if(otherType==true){
            result = result.filter(function (e) { return e.otherType == true; })
        }
        if(rice==true){
            result = result.filter(function (e) { return e.rice == true; })
        }
        if(noodle==true){
            result = result.filter(function (e) { return e.noodle == true; })
        }

        let n = getRandomInt(result.length);
        Alert.alert(result[n].name);


    }///




  return (
    <View style={styles.container}>
      <Text style={{color:'#5F2A05', fontSize:50, marginTop: 40}}>NTNUFOOD</Text>
      <StatusBar style="auto" />

    {/* ------------篩選按鈕區------------ */}

      <View style={styles.container2}>


            <View style={styles.button2}>
                <Button
                  title={buttonText1}
                  color="#EFC997"
                  onPress={handleClick1}
                />
            </View>


            <View style={styles.text}>
                  <Text style={{color:'#5F2A05', fontSize:30}}>飯類</Text>
                  <StatusBar style="auto" />
            </View>

            <View style={styles.button2}>
              <Button
                title={buttonText2}
                color="#EFC997"
                onPress={handleClick2}
              />
            </View>

            <View style={styles.text}>
                  <Text style={{color:'#5F2A05', fontSize:30}}>麵類</Text>
                  <StatusBar style="auto" />
            </View>
      </View>

      <View style={styles.container2}>
            <View style={styles.button2}>
              <Button
                title={buttonText3}
                color="#EFC997"
                onPress={handleClick3}
              />
            </View>

            <View style={styles.text}>
                  <Text style={{color:'#5F2A05', fontSize:30}}>蔬食</Text>
                  <StatusBar style="auto" />
            </View>

            <View style={styles.button2}>
              <Button
                title={buttonText4}
                color="#EFC997"
                onPress={handleClick4}
              />
            </View>

            <View style={styles.text}>
                  <Text style={{color:'#5F2A05', fontSize:30}}>其他</Text>
                  <StatusBar style="auto" />
            </View>
      </View>

      <View style={styles.container2}>
            <View style={styles.button2}>
              <Button
                title={buttonText5}
                color="#EFC997"
                onPress={handleClick5}
              />
            </View>

            <View style={styles.text}>
                  <Text style={{color:'#5F2A05', fontSize:30}}>外帶</Text>
                  <StatusBar style="auto" />
            </View>

            <View style={styles.button2}>
              <Button
                title={buttonText6}
                color="#EFC997"
                onPress={handleClick6}
              />
            </View>

            <View style={styles.text}>
                  <Text style={{color:'#5F2A05', fontSize:30}}>聚餐</Text>
                  <StatusBar style="auto" />
            </View>
      </View>

    {/* ------------篩選按鈕區------------ */}

      <View style={styles.button1}>
        <Button
            title="  SEARCH  "
            color="#EFC997"
            onPress={search}
        />
      </View>

    </View>
  );
}


{/* --------------------------CSS區------------------------- */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEFD5',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    flex: 2,
    backgroundColor: '#FFEFD5',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#FFEFD5',
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFEFD5',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 40,
    marginRight: 10,
    marginTop: 30
  },
  button1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  button2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 5
  },
});

