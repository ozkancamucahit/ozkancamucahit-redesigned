import React, {type ReactNode} from 'react';
import {translate} from '@docusaurus/Translate';
import {useCodeBlockContext} from '@docusaurus/theme-common/internal';

type Props = {className?: string};

export default function WordWrapButton({className}: Props): ReactNode {
  const {wordWrap} = useCodeBlockContext();
  const title = translate({
    id: 'theme.CodeBlock.wordWrapToggle',
    message: 'Toggle word wrap',
    description:
      'The title attribute for toggle word wrapping button of code block lines',
  });

  return (
    <button
      type="button"
      onClick={() => wordWrap.toggle()}
      className={className}
      aria-label={title}
      title={title}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"
        />
      </svg>
    </button>
  );
}
