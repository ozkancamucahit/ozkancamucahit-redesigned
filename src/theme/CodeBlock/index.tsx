import React, {type ComponentProps, type ReactNode} from 'react';
import CodeBlock from '@theme-original/CodeBlock';

type Props = ComponentProps<typeof CodeBlock>;

export default function CodeBlockWrapper(props: Props): ReactNode {
  const language =
    typeof props.className === 'string'
      ? props.className.match(/language-([\w-]+)/)?.[1]
      : undefined;

  return (
    <div
      className="mucahito-code-block"
      data-language={language ?? undefined}
    >
      <CodeBlock {...props} />
    </div>
  );
}
