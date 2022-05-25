import React, { useState, useEffect } from 'react';
import { useCallback } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Header, Post, Name, Description, Avatar } from './styles';
import LazyImage from '../../components/LazyImage';

export default function Feed() {
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [viewable, setViewable] = useState([]);

  async function loadPage(pageNumber = page, shouldResfresh = false) {
    if (total === pageNumber > total) return;
    if (loading) return;

    setLoading(true);

    const response = await fetch(
      `http://localhost:3000/feed?_expand=author&_limit=5&_page=${pageNumber}`,
    );
    const totalItems = response.headers.get('X-Total-Count');
    const data = await response.json();

    setTotal(totalItems / 5);
    setFeed(shouldResfresh ? data : [...feed, ...data]);
    setPage(pageNumber + 1);
    setLoading(false);
  }

  async function refreshList() {
    setRefreshing(true);
    await loadPage(1, true);
    setRefreshing(false);
  }

  useEffect(() => {
    loadPage();
  }, []);

  const handleViewableChanged = useCallback(({ changed }) => {
    setViewable(changed?.map(({ item }) => item.id));
  }, []);
  return (
    <View>
      <FlatList
        data={feed}
        keyExtractor={post => String(post.id)}
        onViewableItemsChanged={handleViewableChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 10 }}
        onEndReached={() => loadPage()}
        onEndReachedThreshold={0.1}
        listFooterComponent={
          loading && (
            <View style={{ indicatorStyles }}>
              <ActivityIndicator size="small" color="#999" />
            </View>
          )
        }
        onRefresh={refreshList}
        refreshing={refreshing}
        renderItem={({ item }) => (
          <Post>
            <Header>
              <Avatar source={{ uri: item.author.avatar }}></Avatar>
              <Name>{item.author.name}</Name>
            </Header>

            <LazyImage
              aspectRatio={item.aspectRatio}
              shouldLoad={viewable.includes(item.id)}
              source={{ uri: item.image }}
              smallSource={{ uri: item.small }}
            />

            <Description>
              <Name>{item.author.name}</Name> {item.description}
            </Description>
          </Post>
        )}
      />
    </View>
  );
}

const indicatorStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
