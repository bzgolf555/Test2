import React from 'react';
import { StyleSheet, Text, View, StatusBar , Dimensions } from 'react-native';
import Content from './Content'

export default class App extends React.Component {
  state={
    menu : 'PUT',
    object : [],
    isLoading : false,
    resPut:'',
  }
  componentWillMount() {
    console.log("componentWillMount")
  }

  componentDidMount() {
    this.fetchMethodGet()
    console.log('componentDidMount')
  }

  fetchMethodGet= async()=>{
    this.setState({isLoading: true})
    try{
      let object = await fetch('https://us-central1-testcrud-b0e56.cloudfunctions.net/api/').then(res => res.json())
      this.setState({ object, isLoading : false})
    }catch(e){
      alert('Something Went Worng')
      this.setState({isLoading : false})
    }
  }


  fetchMethodPut = async(id, name, tel, desc) =>{
      let Put = await fetch('https://us-central1-testcrud-b0e56.cloudfunctions.net/api/'+id,{
        method: 'PUT',
        headers: new Headers ({
            'Content-Type':'application/json'
        }),
        body: JSON.stringify({
            name : name,
            tel : tel,
            desc : desc,
        })
      })
      return Put.respone
  }
  clerObject = () => {
    this.setState({ object :[] })
  }
  changeLoading = () =>{
    this.setState({ isLoading : !this.state.isLoading})
  }

  render() {
    console.log('render')

    

    return (
      
      <View style={styles.container}>
        <Content
          object = {this.state.object}
          fetchMethodGet = {this.fetchMethodGet}
          fetchMethodPut = {this.fetchMethodPut}
          clerObject = {this.clerObject}
          isLoading = {this.isLoading}
          changeLoading = {this.changeLoading}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
