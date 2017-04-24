import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Picker, ListView } from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import AuthAxios from './AuthAxios.js';

const Item = Picker.Item
export default class AddFence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fences: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      label: 'Home',
      user: '1234567'
    };
  };

  static navigationOptions = {
    title: 'Your Fences',
  };

  componentDidMount () {
    AuthAxios({
      url: `/api/labels/`
    })
    .then(({data}) => {
      let fences = data;
      this.setState({fences: this.state.fences.cloneWithRows(fences)});

    })
    .catch(function (error) {
      console.log('error retrieving current fences', error)
    })
  }

  onValueChange (label) {
    const newState = {};
    newState.label = label;
    this.setState(newState);
  }

  makeFence (center, address) {
    let fence = {
      coordinates: this.state.coordinates,
      address: this.state.address
    };

    fence.label = this.state.label;
    fence.user = this.state.user;

    AuthAxios({
      url: '/api/labels',
      method: 'post',
      data: fence
    })
    .then(function (response) {
      alert('Fence created!');
      console.log(this.props.naviation.state.SignUp);
      if (this.props.naviation.state.SignUp) {
        console.log('YOOOOOOOOOOOOOOO')
      }
    })
    .catch(function (error) {
      alert('There was an error creating your fence');
    })
  };

renderFence(fence) {
  return (
    <View>
      <Text>
        {fence.label}
      </Text>
      <Text>
        {fence.address}{'\n'}{'\n'}
      </Text>
    </View>
  )
}

  render() {
    return (
      <View>
        <View>
          <ListView
            dataSource={this.state.fences}
            renderRow={this.renderFence}
          />
        </View>
        <Picker 
          selectedValue={this.state.label}
          onValueChange={this.onValueChange.bind(this)}>
          <Item 
          label='Home' 
          value='Home'
          />
          <Item 
          label='Work'
          value='Work'
          />
          <Item 
          label= 'School' 
          value='School' 
          />
          <Item 
          label= 'Gym' 
          value='Gym' 
          />
          <Item 
          label= 'Bar' 
          value='Bar' 
          />   
        </Picker>
        <View 
        style={{flexDirection: 'row'}}
        >
          <GooglePlacesAutocomplete
            placeholder='Input an address'
            minLength={2}
            autoFocus={false}
            listViewDisplayed='true'
            fetchDetails={true}
            renderDescription={(row) => row.description}
            onPress={(data, details = null) => {
              this.setState({address: data.description});
              this.setState({coordinates: details.geometry.location}, function () {
                console.log('This is the state', this.state.coordinates);
              })
            }}
            getDefaultValue={() => {
              return '';
            }}
            query={{
              key: 'AIzaSyDEG1bzKYZIfvieQnrM-SCR0wOy5N5fHG0',
              language: 'en'
            }}
            styles={{
              description: {
              fontWeight: 'bold',
            },
              predefinedPlacesDescription: {
                color: '#1faadb',
            },
        }}
            nearbyPlacesAPI='GooglePlacesSearch'
            GoogleReverseGeocodingQuery={{
            }}
            GooglePlacesSearchQuery={{
              rankby: 'distance'
            }}
            debounce={200}
        />
        </View>
          <Button
              title='Set this fence'
              onPress={() => this.makeFence(this.state.coordinates, )}
          />
      </View>
    );
  }
}