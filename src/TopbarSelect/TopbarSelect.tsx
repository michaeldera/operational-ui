import React, { useLayoutEffect, useRef, useState } from "react"

import ContextMenu, { ContextMenuProps } from "../ContextMenu/ContextMenu"
import styled from "../utils/styled"
import { CaretUpIcon, CaretDownIcon } from "../Icon/Icon"

export interface TopbarSelectProps {
  /** A label added right before displaying the selected value */
  label: string
  /** Selected value */
  selected?: string
  /** A placeholder displayed when no item is selected */
  placeholder?: string
  /** Menu items, conforming to the ContextMenu API */
  items: ContextMenuProps["items"]
  /** Change handler */
  onChange?: (newLabel: string | React.ReactElement<any>) => void
}

const TopbarSelectContainer = styled("div")<{ isActive: boolean }>`
  line-height: 1;
  height: ${props => props.theme.topbarHeight - (props.isActive ? 1 : 0)}px;
  display: flex;
  align-items: center;
  padding: 0px ${props => props.theme.space.medium}px;
  box-shadow: ${props => (props.isActive ? props.theme.shadows.popup : "none")};
  border-bottom: 1px solid transparent;
  cursor: pointer;
  background-color: ${props => (props.isActive ? props.theme.color.white : "transparent")};
  & svg {
    /** Icons are purely presentational and click events are handled upstream */
    pointer-events: none;
  }
`

const TopbarSelectValue = styled("div")`
  padding: 0px ${props => props.theme.space.base}px;
  font-size: ${props => props.theme.font.size.fineprint}px;
  display: flex;
  align-items: center;
  color: ${props => props.theme.color.text.dark};
  & > :first-child {
    margin-right: ${props => props.theme.space.element}px;
  }
`

const TopbarSelectValueSpan = styled("span")<{ active?: boolean }>`
  color: ${props => (props.active ? props.theme.color.text.dark : props.theme.color.text.lighter)};
`

const TopbarSelectLabel = styled("p")`
  margin: 0px ${props => props.theme.space.base}px 0px 0px;
  font-size: ${props => props.theme.font.size.fineprint}px;
  color: ${props => props.theme.color.text.lightest};
  font-weight: ${props => props.theme.font.weight.medium};
`

const TopbarSelect = ({ label, selected, items, onChange, ...props }: TopbarSelectProps) => {
  const [containerWidth, setContainerWidth] = useState(0)

  const containerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.clientWidth)
    }
  })

  return (
    <ContextMenu
      condensed
      items={items}
      width={containerWidth}
      onClick={newItem => {
        if (onChange) {
          onChange(newItem.label)
        }
      }}
      tabIndex={0}
    >
      {isActive => (
        <TopbarSelectContainer {...props} isActive={isActive} ref={containerRef}>
          <TopbarSelectLabel>{label}</TopbarSelectLabel>
          <TopbarSelectValue>
            <TopbarSelectValueSpan active={Boolean(selected)}>{selected}</TopbarSelectValueSpan>
            {React.createElement(isActive ? CaretUpIcon : CaretDownIcon, { size: 12, color: "color.text.lightest" })}
          </TopbarSelectValue>
        </TopbarSelectContainer>
      )}
    </ContextMenu>
  )
}

export default TopbarSelect
