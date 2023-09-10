import React from 'react'

import { BallTriangle } from 'react-loader-spinner'

export const Loader = () => {
	return (
		<>
			<BallTriangle
				height={100}
				width={100}
				radius={3}
				color='#171cb8'
				ariaLabel='ball-triangle-loading'
				wrapperClassName=''
				wrapperStyle={{}}
				visible={true}
			/>
		</>
	)
}
