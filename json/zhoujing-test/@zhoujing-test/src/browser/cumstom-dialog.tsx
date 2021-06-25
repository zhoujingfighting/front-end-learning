import * as React from 'react'
import { inject,injectable } from 'inversify'
import { ReactDialog } from '@theia/core/lib/browser/dialogs/react-dialog'
import { DialogProps } from '@theia/core/lib/browser'

@injectable()
export class CustomDialogProps extends DialogProps {
	readonly text: string
	readonly okValue: string
	readonly cancelValue: string
}

interface CustomDialogvalue{
	text: string
}

@injectable()
export class CustomDialog extends ReactDialog<CustomDialogvalue>{
	protected readonly text: string

	constructor(
		@inject(CustomDialogProps)  protected readonly customDialogprops:CustomDialogProps
	){
		super(customDialogprops)
		const { text , okValue , cancelValue } = this.customDialogprops
		this.text  = text
		this.appendCloseButton(cancelValue)
		this.appendAcceptButton(okValue)
		this.update()
	}

	protected render(): React.ReactNode{
		return (
			<div>
				{this.text}
			</div>
		)
	}
	get value(): CustomDialogvalue{
		return {
			text: this.text
		}
	}
}