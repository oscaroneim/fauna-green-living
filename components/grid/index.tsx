import clsx from 'clsx';

function Grid(props: React.ComponentProps<'ul'>) {
  return (
    <div className="w-full overflow-y-hidden max-md:flex max-md:overflow-x-auto">
      <ul
        {...props}
        className={clsx('flex h-full gap-2 md:flex-wrap md:pl-[24px]', props.className)}
      >
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
