import Rule from '../../Domain/Rule.js';
import TreeEdge from '../Tree/TreeEdge.js';
import WeightedTreeNode from './WeightedTreeNode.js';

export default class WeightedTreeEdge extends TreeEdge {
	/// Attributes
	private accumulatedWeight: number;

	/// Constructor
	constructor(
		sourceNode: WeightedTreeNode,
		targetNode: WeightedTreeNode,
		rule: Rule,
	) {
		super(sourceNode, targetNode, rule);
		this.accumulatedWeight = sourceNode.getWeight() + rule.getElapsedTime();
	}

	/// Getters
	public getWeight(): number {
		return this.accumulatedWeight;
	}
}
