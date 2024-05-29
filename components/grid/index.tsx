// Grid layout of the collection page
import clsx from 'clsx';

function Grid(props: React.ComponentProps<'ul'>) {
  return (
    <div className="h-full w-full max-md:flex max-md:overflow-x-auto">
      <ul {...props} className={clsx('flex gap-2 md:flex-wrap md:pl-[24px]', props.className)}>
        {props.children}
      </ul>
    </div>
  );
}

function GridItem(props: React.ComponentProps<'li'>) {
  return (
    <div className="h-[290px]">
      <li {...props} className={clsx('aspect-square transition-opacity', props.className)}>
        {props.children}
      </li>
    </div>
  );
}

Grid.Item = GridItem;

export default Grid;
