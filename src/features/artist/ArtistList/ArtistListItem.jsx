import React, { Component } from 'react';
import { Segment, Icon, Item, List, Button } from 'semantic-ui-react';
import ArtistListDiscography from './ArtistListDiscography';

class ArtistListItem extends Component {
    render() {
        const { artist } = this.props;
        return (
            <Segment.Group>
                <Segment>
                    <Item.Group>
                        <Item>
                            <Item.Image
                                src={artist.artistPhotoURL}
                                float="left"
                                size="medium"
                            />
                            <Item.Content>
                                <Item.Header as="a" float="right" size="medium">
                                    {artist.name}
                                </Item.Header>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
                <Segment>
                    <Item.Group>
                        <Item>
                            <List>
                                <List.Content>
                                    <List.Item>
                                        Formed: {artist.formed}
                                    </List.Item>
                                    <List.Item>
                                        Country: {artist.country}
                                    </List.Item>
                                    <List.Item>Label: {artist.label}</List.Item>
                                </List.Content>
                            </List>
                        </Item>
                    </Item.Group>
                </Segment>
                <Segment secondary>
                    <List>
                        {artist.albums.map(album => (
                            <ArtistListDiscography
                                key={album.id}
                                album={album}
                            />
                        ))}
                    </List>
                </Segment>
                <Segment clearing>
                    <span>{artist.history}</span>
                    <Button
                        as="a"
                        color="teal"
                        floated="right"
                        content="View"
                    />
                </Segment>
            </Segment.Group>
        );
    }
}

export default ArtistListItem;
