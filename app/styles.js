import React from 'react';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  centerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  mapContainer: {
    // ...StyleSheet.absoluteFillObject,
    height: 350,
    width: 350,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  switchContainer: {
    // paddingTop: 10, 
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  friendMapContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 10,
  },
  nameContainer: {
    flex: 1,
    marginBottom: 10,
    paddingLeft: 10,
    // backgroundColor: 'blue'
  },
  settingContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  name: {
    fontSize: 23,
    textAlign: 'left',
    color: 'black',
  },
  label: {
    fontSize: 18,
    textAlign: 'left',
    color: 'black',
    fontStyle: 'italic',
  },
  addName: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
  switchText: {
    color: 'black',
    fontSize: 15,
  },
  friendMapText: {
    // textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 20,
  },
  createGroupText: {
    fontSize: 20,
  },
  phoneNumber: {
    textAlign: 'center',
    color: 'black',
  },
  groupName: {
    fontSize: 23,
    textAlign: 'center',
    color: 'black',
  },
  button: {

  },
  listView: {
    // flex: 1,
    // flexDirection: 'column',
    padding: 10,
    backgroundColor: '#F5FCFF',
  },
  settingText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'auto',
    color: 'black',
  },
  settingDescription: {
    fontSize: 14,
    textAlign: 'auto',
    color: 'black',
  },
  labelImage: {
    width: 225,
    height: 225,
    alignItems: 'center',
  }
});