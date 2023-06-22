import React, { FC } from 'react';
import { Button, DatePicker, Form, Input, Select } from 'antd';
import useMyBlogUpdate from 'components/MyBlog/Update/hooks/useMyBlogUpdate';

const { TextArea } = Input;

interface IMyBlogUpdate {
	hideModal: () => void;
}

const MyBlogUpdate: FC<IMyBlogUpdate> = ({ hideModal }) => {
	const { form, onFinishHandler, isLoading, imageSelected, setImageSelected } = useMyBlogUpdate(hideModal);

	return (
		<Form form={form} onFinish={onFinishHandler} layout='vertical' className='mt-5'>
			<Form.Item name='title' required label='Title' rules={[{ required: true, message: 'enter Title' }]}>
				<Input />
			</Form.Item>

			<div className='flex space-x-5'>
				<Form.Item className='flex-1' name='image' required label='Image' rules={[{ required: true, message: 'select Image' }]}>
					<Select
						value={imageSelected}
						onChange={(e) => setImageSelected(e)}
						options={[
							{
								value: 'http://localhost:3000/images/img-1.jpg',
								label: <img width={75} height={75} className='rounded-lg mx-auto' src='http://localhost:3000/images/img-1.jpg' />,
							},
							{
								value: 'http://localhost:3000/images/img-2.jpg',
								label: <img width={75} height={75} className='rounded-lg mx-auto' src='http://localhost:3000/images/img-2.jpg' />,
							},
							{
								value: 'http://localhost:3000/images/img-3.jpg',
								label: <img width={75} height={75} className='rounded-lg mx-auto' src='http://localhost:3000/images/img-3.jpg' />,
							},
							{
								value: 'http://localhost:3000/images/img-4.jpg',
								label: <img width={75} height={75} className='rounded-lg mx-auto' src='http://localhost:3000/images/img-4.jpg' />,
							},
						]}
					/>
				</Form.Item>

				{imageSelected && <img width={100} height={100} className='rounded-lg' src={imageSelected} />}
			</div>

			<Form.Item name='content' required label='Content' rules={[{ required: true, message: 'Enter Content' }]}>
				<TextArea rows={6}></TextArea>
			</Form.Item>

			<Form.Item name='publishedAt' label='Publish Date'>
				<DatePicker className='w-full' format='YYYY-MM-DD' />
			</Form.Item>

			<hr />

			<div className='grid grid-cols-3 gap-5 mt-5'>
				<Form.Item
					name='orderTitle'
					required
					label='Title Order'
					rules={[
						{ required: true, message: 'Enter Value' },
						{ pattern: /^1|2|3/, message: 'value must be : 1 Or 2 Or 3' },
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					name='orderImage'
					required
					label='Image Order'
					rules={[
						{ required: true, message: 'Enter Value' },
						{ pattern: /^1|2|3/, message: 'value must be : 1 Or 2 Or 3' },
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					name='orderContent'
					required
					label='Content Order'
					rules={[
						{ required: true, message: 'Enter Value' },
						{ pattern: /^1|2|3/, message: 'value must be : 1 Or 2 Or 3' },
					]}
				>
					<Input />
				</Form.Item>
			</div>

			<Button loading={isLoading} htmlType='submit' type='primary' className='w-full mt-3'>
				Create Blog
			</Button>
		</Form>
	);
};

export default MyBlogUpdate;
