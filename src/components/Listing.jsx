import { createSignal, For } from 'solid-js';
import Card from './Card';

const Listing = ({ data }) => {
  const [selectedDomain, setSelectedDomain] = createSignal('All');
  const domains = ['All', ...new Set(data.map((d) => d.domain))];

  return (
    <div class='flex flex-col xl:flex-row gap-5 items-start container mx-auto px-4'>
      {/*domain select menu*/}
      <div class='flex flex-col xl:flex-[2] w-full px-4'>
        <div className='hidden xl:block'>
          <For each={domains}>
            {(domain) => (
              <div
                classList={{
                  'domain-item': true,
                  'domain-item__active': selectedDomain() === domain,
                }}
                onClick={() => setSelectedDomain(domain)}>
                {domain}
              </div>
            )}
          </For>
        </div>
        <select
          value={selectedDomain()}
          onChange={(e) => setSelectedDomain(e.target.value)}
          class='xl:hidden text-sm text-gray-700 p-2 rounded-md border border-black/30 cursor-pointer'>
          <For each={domains}>
            {(domain) => <option value={domain}>{domain}</option>}
          </For>
        </select>
      </div>
      {/* end domain select menu  */}
      <div class='xl:flex-[6] px-4 w-full'>
        <div class='flex items-center justify-between py-1 w-full border-b border-black/50 mb-4'>
          <span class='font-semibold text-lg capitalize'>
            {selectedDomain()}
          </span>
          <a
            class='text-sm text-[#1488CC] font-semibold flex items-center gap-1'
            href='https://github.com/lemokami/startupsofkerala'>
            <span class='peer'>Edit this page</span>
            <svg
              width='16'
              height='11'
              viewBox='0 0 16 11'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              class='peer-hover:transform peer-hover:translate-x-1 hover:translate-x-1 transition-all'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M10.293 0.799043C10.4805 0.611572 10.7348 0.506256 11 0.506256C11.2652 0.506256 11.5195 0.611572 11.707 0.799043L15.707 4.79904C15.8945 4.98657 15.9998 5.24088 15.9998 5.50604C15.9998 5.77121 15.8945 6.02551 15.707 6.21304L11.707 10.213C11.5184 10.3952 11.2658 10.496 11.0036 10.4937C10.7414 10.4914 10.4906 10.3863 10.3052 10.2009C10.1198 10.0155 10.0146 9.76464 10.0123 9.50244C10.01 9.24025 10.1108 8.98764 10.293 8.79904L12.586 6.50604H1C0.734784 6.50604 0.48043 6.40069 0.292893 6.21315C0.105357 6.02561 0 5.77126 0 5.50604C0 5.24083 0.105357 4.98647 0.292893 4.79894C0.48043 4.6114 0.734784 4.50604 1 4.50604H12.586L10.293 2.21304C10.1055 2.02551 10.0002 1.77121 10.0002 1.50604C10.0002 1.24088 10.1055 0.98657 10.293 0.799043V0.799043Z'
                fill='#1488CC'
              />
            </svg>
          </a>
        </div>
        {/* list of startups */}
        <div class='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2'>
          <For each={data}>
            {(startup) => (
              <>
                {startup.domain.toLowerCase() ===
                  selectedDomain().toLowerCase() ||
                selectedDomain() === 'All' ? (
                  <Card data={startup} />
                ) : null}
              </>
            )}
          </For>
        </div>
      </div>
      {/* end of list of startups */}
    </div>
  );
};

export default Listing;
