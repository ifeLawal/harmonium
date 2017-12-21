import React, {Component} from 'react'
import ExampleSection from '../../ExampleSection'
import Badge from 'revelry-components/lib/Badge'

const examples = {
  'Badges': require('raw!../../examples/Badge.js.example')
}

const scope = {React: React, Badge: Badge, }

export default class BadgeExamplePage extends Component {
  render() {
    return <div>
      <ExampleSection title="Examples" examples={examples} depth={1} scope={scope} />
    </div>
  }
}
