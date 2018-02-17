import React, { Component } from 'react'
import Link from './Link'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// 1
const FEED_QUERY = gql`
  # 2
  query FeedQuery {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`

class LinkList extends Component {
    render() {
        // const linksToRender = [
        //     {
        //         id: '1',
        //         description: 'Prisma turns your database into a GraphQL API 😎 😎',
        //         url: 'https://www.prismagraphql.com',
        //     },
        //     {
        //         id: '2',
        //         description: 'The best GraphQL client',
        //         url: 'https://www.apollographql.com/docs/react/',
        //     },
        // ]
        
        // return (
        //     <div>{linksToRender.map(link => <Link key={link.id} link={link} />)}</div>
        // )
        // 1
        if (this.props.feedQuery && this.props.feedQuery.loading) {
            return <div>Loading</div>
        }

        // 2
        if (this.props.feedQuery && this.props.feedQuery.error) {
            return <div>Error</div>
        }

        // 3
        const linksToRender = this.props.feedQuery.feed.links

        return (
            <div>{linksToRender.map(link => <Link key={link.id} link={link} />)}</div>
        )
    }
}

// 3
export default graphql(FEED_QUERY, { name: 'feedQuery' }) (LinkList)
//export default LinkList