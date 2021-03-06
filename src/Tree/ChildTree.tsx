import * as React from "react"
import Tree, { TreeProps } from "./Tree"
import TreeItem from "./TreeItem"
import styled from "../utils/styled"

type Props = TreeProps["trees"][-1] & { searchWords?: string[]; level: number }

const Container = styled("div")<{ hasChildren: boolean; disabled: boolean }>`
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "inherit")};
  user-select: none;
  margin-bottom: -${({ theme }) => theme.space.base}px;
`
const ChildTree: React.SFC<Props> = ({
  initiallyOpen,
  highlight,
  tag,
  label,
  icon,
  iconColor,
  color,
  disabled,
  forwardRef,
  childNodes = [],
  droppableProps,
  onClick,
  onRemove,
  cursor,
  searchWords,
  level,
  ...props
}) => {
  const [isOpen, setIsOpen] = React.useState(Boolean(initiallyOpen))
  const hasChildren = Boolean(childNodes && childNodes.length)
  const onNodeClick =
    !disabled && (hasChildren || onClick)
      ? (e: React.MouseEvent<HTMLDivElement>) => {
          e.stopPropagation()
          if (hasChildren) {
            setIsOpen(!isOpen)
          }
          if (onClick) {
            onClick()
          }
        }
      : undefined

  return (
    <Container ref={forwardRef} disabled={Boolean(disabled)} hasChildren={hasChildren} {...props}>
      <TreeItem
        level={level}
        searchWords={searchWords}
        onNodeClick={onNodeClick}
        highlight={Boolean(highlight)}
        hasChildren={hasChildren}
        isOpen={isOpen}
        tag={tag}
        label={label}
        color={color}
        icon={icon}
        iconColor={iconColor}
        onRemove={onRemove}
        cursor={cursor}
      />
      {hasChildren && isOpen && (
        <Tree _level={level + 1} trees={childNodes} searchWords={searchWords} droppableProps={droppableProps} />
      )}
    </Container>
  )
}

export default ChildTree
