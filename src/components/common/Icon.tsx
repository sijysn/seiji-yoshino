import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import {
  faTwitter,
  faFontAwesome,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons"
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome"

library.add(fas, faTwitter, faFacebook, faFontAwesome)

export const Icon: React.FC<FontAwesomeIconProps> = props => {
  return <FontAwesomeIcon {...props} />
}
