import { useState } from 'react'
import { Text, TextInput, View, Pressable, Keyboard } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Header from './Header'
import Footer from './Footer'
import styles from '../style/style'
import { 
  NBR_OF_DICES, 
  NBR_OF_THROWS, 
  MIN_SPOT, 
  MAX_SPOT, 
  BONUS_POINTS_LIMIT, 
  BONUS_POINTS } from '../constants/Game';
import style from '../style/style'

// I went for the satisfactory level 1, for extra I changed some positioning and styling of the text and colors from Home and Gameboard screens, assuming it at least doesn't reduce points. //

export default function Home ({navigation}) {

  const [playerName, setPlayerName] = useState('');
  const [hasPlayerName, setHasPlayerName] = useState(false);

  const handlePlayerName = (value) => {
    if (value.trim().length > 0) {
      setHasPlayerName(true);
      Keyboard.dismiss();
    }
  }

  return (
    <>
    <Header />
    <View>
      <MaterialCommunityIcons
      marginLeft={135}
        name="information"
        size={90}
        color="#EC5E5E"
      />
      {!hasPlayerName ?
        <>
          <Text style={style.hometext}>For scoreboard enter your name...</Text>
          <TextInput
            style={style.hometextinput}
            onChangeText={setPlayerName}
            autoFocus={true}
          />
          <Pressable
            onPress={() => handlePlayerName(playerName)}>
            <Text style={style.hometext2}>OK</Text>
          </Pressable>
        </>
      :
        <>
          <Text style={style.hometext}>Rules of the game</Text>
          <Text multiline="true" style={style.gamerules}>
          THE GAME: Upper section of the classic Yahtzee
          dice game. You have {NBR_OF_DICES} dices and
          for the every dice you have {NBR_OF_THROWS}{" "}
          throws. After each throw you can keep dices in
          order to get same dice spot counts as many as
          possible. In the end of the turn you must select
          your points from {MIN_SPOT} to {MAX_SPOT}.
          Game ends when all points have been selected.
          The order for selecting those is free.{'\n'}

          {'\n'}POINTS: After each turn game calculates the sum
          for the dices you selected. Only the dices having
          the same spot count are calculated. Inside the
          game you can not select same points from
          {" "}{MIN_SPOT} to {MAX_SPOT} again.{'\n'}

          {'\n'}GOAL: To get points as much as possible.
          {" "}{BONUS_POINTS_LIMIT} points is the limit of
          getting bonus which gives you {BONUS_POINTS}{" "}
          points more.{'\n'}
          </Text>
          <Text style={style.homegl4}>Good luck, {playerName}</Text>
          <Pressable
            onPress={() => navigation.navigate("Gameboard", {player: playerName})}>
            <Text style={style.homegl}>Start game</Text>
          </Pressable>
        </>
      }
    </View>
    <Footer />
    </>
  )
}