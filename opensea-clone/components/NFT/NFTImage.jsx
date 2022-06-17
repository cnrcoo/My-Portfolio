import Image from 'next/image';
import { AiOutlineHeart } from 'react-icons/ai';

const style = {
	wrapper: 'rounded-lg border dark:border-transparent dark:bg-[#313339]',
	nftHeader: 'flex items-center justify-between',
	likeContainer: 'flex items-center justify-end space-x-2',
	heartIcon: 'h-5 w-5 text-gay-500 dark:text-gray-400',
	likesCounter: 'text-sm font-semibold text-gray-500 dark:text-gray-400',
	nftImage: 'rounded-b-lg object-cover',
};

const NFTImage = ({ image }) => {
	return (
		<div className={style.wrapper}>
			<div className={style.nftHeader}>
				<Image height={20} width={20} src='/eth-logo.svg' alt='eth' />

				<div className={style.likeContainer}>
					<AiOutlineHeart className={style.heartIcon} />
					<div className={style.likesCounter}>200</div>
				</div>
			</div>

			<div>
				{image && <Image src={image} width={448} height={448} alt='nft' />}
			</div>
		</div>
	);
};

export default NFTImage;
