import * as React from 'react'
import { inject,injectable } from 'inversify'
import { ReactDialog } from '@theia/core/lib/browser/dialogs/react-dialog'
import { DialogProps } from '@theia/core/lib/browser'

//定义入参
@injectable()
export class CustomDialogProps extends DialogProps {
	readonly text: string
	readonly okValue: string
	readonly cancelValue: string
}

//
interface CumsDialogValue {
	text: string
}
@injectable()
export class CumstomDialog extends ReactDialog<CustomDialogProps>{
	protected text: string
	constructor(
		@inject(CustomDialogProps) private readonly props: CustomDialogProps
	){
		super(props)
		const { text,okValue,cancelValue } = this.props
		this.text = text
		this.appendCloseButton(cancelValue)
		this.appendAcceptButton(okValue)
	}
	protected render():React.ReactNode{
		return (
			<div>
				{this.text}
			</div>
		)
	}
	get value(): CumsDialogValue{
		return {
			text:this.text
		}
	}
}