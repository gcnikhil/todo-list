
export const CONTRACT_ADDRESS="0xaeC7f4Fa8a3425209790757489aAf4824638EABD";
export const CONTRACT_ABI=[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_disc",
				"type": "string"
			}
		],
		"name": "addTask",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "updatetask",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllTask",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "disc",
						"type": "string"
					},
					{
						"internalType": "enum Mycontract.Taskstatus",
						"name": "status",
						"type": "uint8"
					}
				],
				"internalType": "struct Mycontract.Task[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getTask",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "enum Mycontract.Taskstatus",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tasks",
		"outputs": [
			{
				"internalType": "string",
				"name": "disc",
				"type": "string"
			},
			{
				"internalType": "enum Mycontract.Taskstatus",
				"name": "status",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];