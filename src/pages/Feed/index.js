import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Header, Post, PostImage, Name, Description, Avatar } from './styles';

export default function Feed() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    async function loadFeed() {
      const response = await fetch('http://localhost/3000/feed?_expand=author_limit=5&_page=1');
      const data = await response.json();
      setFeed(data);
      return data;
    }
    loadFeed();
  }, []);

  return (
    <View>
      <FlatList
        data={feed}
        keyExtractor={post => String(post.id)}
        renderItem={item => (
          <Post>
            <Header>
              <Avatar source={{ uri: item.author.avatar }}></Avatar>
              <Name>{item.autor.name}</Name>
            </Header>

            <PostImage source={{ uri: item.image }} />

            <Description>
              <Name>{item.autor.name}</Name> {item.description}
            </Description>
          </Post>
        )}
      />
    </View>
  );
}
