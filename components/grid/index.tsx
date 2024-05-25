import clsx from 'clsx';

function Grid(props: React.ComponentProps<'ul'>) {
  return (
    <div className="h-full w-full max-md:flex max-md:overflow-x-auto">
      <ul {...props} className={clsx('flex h-full gap-2 pl-[24px] md:flex-wrap', props.className)}>
        {props.children}
      </ul>
    </div>
  );
}

function GridItem(props: React.ComponentProps<'li'>) {
  return (
    <li {...props} className={clsx('aspect-square transition-opacity', props.className)}>
      {props.children}
    </li>
  );
}

Grid.Item = GridItem;

export default Grid;
