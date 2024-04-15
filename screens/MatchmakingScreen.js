import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import usersData from '../data';
import MatchItem from '../components/MatchItem/MatchItem';

const MatchmakingScreen = () => {
  const [interests, setInterests] = useState('');
  const [matches, setMatches] = useState([]);

  const handleInterestsChange = (text) => {
    setInterests(text);
  };

  const handleMatchmaking = () => {
    const interestsArray = interests.toLowerCase().split(',').map(interest => interest.trim());

    const matchedUsers = usersData.map(user => {
      const commonInterests = user.interests.filter(interest =>
        interestsArray.includes(interest.toLowerCase())
      );
      const compatibilityScore = commonInterests.length;
      return { ...user, compatibilityScore };
    });

    matchedUsers.sort((a, b) => b.compatibilityScore - a.compatibilityScore);
  
    setMatches(matchedUsers);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Your Matches</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your interests separated by commas"
        onChangeText={handleInterestsChange}
        value={interests}
      />
      <Button title="Find Matches" onPress={handleMatchmaking} />
      <FlatList
        style={styles.matchList}
        data={matches}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MatchItem user={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  matchList: {
    marginTop: 20,
  },
});

export default MatchmakingScreen;
