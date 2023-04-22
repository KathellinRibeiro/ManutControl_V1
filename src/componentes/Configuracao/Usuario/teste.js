import React, { useState, useEffect } from 'react';
import { ListItem } from '@rneui/themed';

export default function App() {
    return (
        <ListItem.Accordion
            content={
                <>
                    {/* <Icon name="place" size={30} /> */}
                    <ListItem.Content>
                        <ListItem.Title>List Accordion</ListItem.Title>
                    </ListItem.Content>
                </>
            }
            isExpanded={expanded}
            onPress={() => {
                setExpanded(!expanded);
            }}
        >
            {/*  {list2.map((l, i) => (
    <ListItem key={i} onPress={log} bottomDivider>
      <Avatar title={l.name[0]} source={{ uri: l.avatar_url }} />
      <ListItem.Content>
        <ListItem.Title>{l.name}</ListItem.Title>
        <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  ))} */}
        </ListItem.Accordion>
    );
}

