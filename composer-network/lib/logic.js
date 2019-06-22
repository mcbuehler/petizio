/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global getAssetRegistry getParticipantRegistry */

/**
 * @param {org.petizio.petition.CreateSampleData} createSampleData
 * @transaction
 */
async function createSampleData(){
    factory = getFactory();

    petitionerAR = await getParticipantRegistry("org.petizio.petition.Petitioner");
    petitioner = factory.newResource("org.petizio.petition", "Petitioner", "xyz");
    petitionerAR.add(petitioner);

    for(var i=0; i<3; i++){
        voterAR = await getParticipantRegistry("org.petizio.petition.Voter");
        voter = factory.newResource("org.petizio.petition", "Voter", "abc"+i);
        voterAR.add(voter);
    }

    petitionAR = await getAssetRegistry("org.petizio.petition.Petition");
    petition = factory.newResource("org.petizio.petition", "Petition", "abc");
    petition.description = "Test";
    petition.title = "Title";
    petition.owner = petitioner;
    petitionAR.add(petition);
}

/**
 * @param {org.petizio.petition.VoteForPetition} voteForPetition
 * @transaction
 */
async function voteForPetition(voteForPetition) {
    const petition = voteForPetition.petition;
    const voter = voteForPetition.voter;
    const newVoteId = petition.getIdentifier() + voter.getIdentifier();

    factory = getFactory();
    const newVote = factory.newResource("org.petizio.petition", "Vote", newVoteId);
    voteAssetRegistry = await getAssetRegistry("org.petizio.petition.Vote");
    voteAssetRegistry.add(newVote);

    newVote.owner = voter;
    petition.votes.push(newVote);
    assetRegistry = await getAssetRegistry("org.petizio.petition.Petition");
    assetRegistry.update(petition);

}



// /**
//  * Sample transaction
//  * @param {org.petizio.com.SampleTransaction} sampleTransaction
//  * @transaction
//  */
// async function sampleTransaction(tx) {
//     // Save the old value of the asset.
//     const oldValue = tx.asset.value;
//
//     // Update the asset with the new value.
//     tx.asset.value = tx.newValue;
//
//     // Get the asset registry for the asset.
//     const assetRegistry = await getAssetRegistry('org.petizio.com.SampleAsset');
//     // Update the asset in the asset registry.
//     await assetRegistry.update(tx.asset);
//
//     // Emit an event for the modified asset.
//     let event = getFactory().newEvent('org.petizio.com', 'SampleEvent');
//     event.asset = tx.asset;
//     event.oldValue = oldValue;
//     event.newValue = tx.newValue;
//     emit(event);
// }
