import type { NextPage } from 'next'

import useHasMounted from '@/utils/hooks/useHasMounted';

const Home: NextPage = () => {
  const hasMounted = useHasMounted();
  if(!hasMounted)
    return null;
  return (
    <div>
      HOME
    </div>
  )
}

export default Home
