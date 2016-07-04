import React from 'react'
import Gists from './Gists'
import {onAfterUpsert, onAfterRemove} from './hooks-functions'

import 'meteor/matb33:collection-hooks'

Gists.after.insert(onAfterUpsert)
Gists.after.update(onAfterUpsert)
Gists.after.remove(onAfterRemove)