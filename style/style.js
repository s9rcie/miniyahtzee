import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    marginTop: 30,
    marginBottom: 15,
    backgroundColor: '#EC5E5E',
    flexDirection: 'row',
  },
  footer: {
    marginTop: 20,
    backgroundColor: '#EC5E5E',
    flexDirection: 'row'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#73CED6",
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color:"#2B2B52",
    fontSize: 20
  },
  hometext: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
    marginBottom: 15,
  },
  hometext2: {
    backgroundColor: "#eba4a4",
    borderRadius: 5,
    borderWidth: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 30,
    marginBottom: 15,
  },
  hometext3: {
    textAlign: 'center',
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 50,
    marginRight: 50,
    padding: 5,
    backgroundColor: "skyblue",
  },
  hometextinput: {
    textAlign: 'center',
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    padding: 5,
  },
  gamerules: {
    marginLeft: 25,
    marginRight: 25,
  },
  homegl: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 5,
  },
  homegl2: {
    marginLeft: 10,
    marginTop: 25,
  },
  homegl3: {
    textAlign: 'center',
    marginTop: 10,
  },
  homegl4: {
    textAlign: 'center',
  },
  pointrow: {
    marginLeft: 8,
    marginBottom: 5,
  }
});