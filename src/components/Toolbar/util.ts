// types.ts

interface toolbarInfo {
  name: string;
  className: string;
  tooltip: string;
  state: string;
  command?: string;
}

export function createDefaultToolbarItemInfo(type: string) {
  let info: toolbarInfo;

  switch (type) {
    case 'undo':
      info = {
        name: 'undo',
        className: 'mu-picture-undo',
        tooltip: 'undo',
        state: 'undo',
      }
      break
    case 'redo':
      info = {
        name: 'redo',
        className: 'mu-picture-redo',
        command: 'redo',
        tooltip: 'redo',
        state: 'redo',
      }
      break
    case 'text':
      info = {
        name: 'text',
        className: 'text',
        tooltip: '添加文字',
        state: 'text',
      }
      break
    case 'mosaic':
      info = {
        name: 'mosaic',
        className: 'mosaic',
        command: 'mosaic',
        tooltip: '马赛克',
        state: 'mosaic',
      }
      break

    default:
    // do nothing
  }
  return info
}