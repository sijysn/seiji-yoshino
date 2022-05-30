import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons"
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome"

library.add(fas, faTwitter, faFontAwesome)

export const Icon: React.FC<FontAwesomeIconProps> = props => {
  return <FontAwesomeIcon {...props} />
}
